export const GET_USERS_LIST_QUERY = `
    SELECT
        u.id,
        u.fullname AS name,
        r.name AS role,
        u.is_active,
        u.created_at,
        u.updated_at
    FROM neusentra.users u
    INNER JOIN neusentra.roles r ON u.role_id = r.id
    WHERE (
            (u.created_at < $1)
            OR (u.created_at = $1 AND u.id < $2)
      )
    ORDER BY u.created_at DESC, u.id DESC
    LIMIT $3;
`;