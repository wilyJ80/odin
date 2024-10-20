# Run locally

- Duplicate env.example as `.env`, fill in details

- Run `npm run seed` to seed the database.

    - Make sure the database exists. For convenience, just add to `.env` the same DB as your default Postgres role.

- Run `npm run server`

# Run with Docker

`sudo docker compose --profile dev up --build`

- Testing

`sudo docker compose --profile test up --build`

# TODO

- [ ] Add reverse proxy?
