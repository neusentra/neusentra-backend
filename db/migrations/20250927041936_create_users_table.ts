import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.withSchema('neusentra').createTable("users", (table: any) => {
        table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
        table.string("fullname", 25).notNullable();
        table.string("username", 20).notNullable().unique();
        table.text("password_hash").notNullable();
        table.uuid("role_id")
            .notNullable()
            .references("id")
            .inTable("neusentra.roles")
            .onDelete("CASCADE");
        table.boolean("is_active").defaultTo(true);
        table.timestamp("created_at", { useTz: true }).defaultTo(knex.fn.now());
        table.timestamp("updated_at", { useTz: true }).defaultTo(knex.fn.now());
        table.string("created_by").notNullable().defaultTo("system");
        table.string("updated_by").notNullable().defaultTo("system");
    });

    await knex.schema.raw(`
        CREATE INDEX IF NOT EXISTS idx_users_role_id ON neusentra.users(role_id);
        CREATE INDEX IF NOT EXISTS idx_users_is_active ON neusentra.users(is_active);
        CREATE INDEX IF NOT EXISTS idx_users_created_at ON neusentra.users(created_at);
        CREATE INDEX IF NOT EXISTS idx_users_created_at_id
        ON neusentra.users (created_at DESC, id DESC)
        WHERE is_active = true;
    `);
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.withSchema('neusentra').dropTableIfExists("users");
    
    await knex.schema.raw(`
        DROP INDEX IF EXISTS neusentra.idx_users_role_id;
        DROP INDEX IF EXISTS neusentra.idx_users_is_active;
        DROP INDEX IF EXISTS neusentra.idx_users_created_at;
        DROP INDEX IF NOT EXISTS neusentra.idx_users_created_at_id;
    `);
}

