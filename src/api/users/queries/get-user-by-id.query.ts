export const GET_USER_DETAILS_BY_ID_QUERY = `
    SELECT 
        u.id,
        u.fullname as name,
        u.username,
        r.name as role,
        u.is_active,
        u.created_at,
        u.updated_at,
        u.created_by,
        u.updated_by
    FROM neusentra.users u
    INNER JOIN neusentra.roles r on u.role_id = r.id
    WHERE id = $1;
`;
