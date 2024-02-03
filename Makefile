install:
	npm i

gendiff:
	node bin/gendiff.js

lint:
	npx eslint

publish:
	nmp publish --dry-run

test:
	npx jest

test-coverage:
	npm test -- --coverage --coverageProvider=v8