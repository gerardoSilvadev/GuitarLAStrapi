module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ceh29d9a6gdoe9o8d5ng-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_5gn3'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '9moSilQEV21koB20EqfJC7gfswYjqrUB'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
