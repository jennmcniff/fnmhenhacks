# syntax=docker/dockerfile:1

FROM nikolaik/python-nodejs

# Copy files for poetry
COPY backend/pyproject.toml /app/backend/pyproject.toml
COPY backend/poetry.lock /app/backend/poetry.lock

# Copy backend source code
COPY backend/app/ /app/backend/app

# Copy data files
COPY data/ app/data/
WORKDIR /app/data
RUN python csv_to_json.py

WORKDIR /

# Copy frontend code
COPY frontend/package-lock.json /app/frontend/package-lock.json
COPY frontend/package.json /app/frontend/package.json

WORKDIR /app/frontend
RUN npm install

COPY frontend/public /app/frontend/public
COPY frontend/src /app/frontend/src

RUN npm run build

WORKDIR /app/backend

RUN pip3 install poetry
RUN poetry config virtualenvs.create false
RUN poetry install --no-dev --no-root

EXPOSE 3000

CMD ["poetry", "run", "python", "-OO", "-m", "app"]
