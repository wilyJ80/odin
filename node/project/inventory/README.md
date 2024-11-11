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

- Pages (free fake product store):
    - Index: shows all categories, product search, store banner, plus all paginated products
    - Specific category page: shows products related to the category
    - Specific product page

- [X] Expects rendering index: get all categories and products
    - [ ] Fix: should paginate products
    - [ ] Init script should load some initial categories/products
- [ ] GET, POST, DELETE, PUT specific category (for filtering products)
- [ ] GET, POST, DELETE, PUT specific product
- [ ] Separate category from product queries
    - [ ] route test
    - [ ] db test
    - [ ] integration test

- [ ] Views
    - [ ] Main page: paginate? filter products?

- [ ] Try catch?
- [ ] Separate development and testing databases: want to deploy to a PaaS Postgres instance. Suggestion: same credentials, different URL
- [ ] Reverse Proxy?
