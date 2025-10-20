dev:
	pnpm dev

deploy:
	docker-compose down -v && docker-compose up --remove-orphans --build