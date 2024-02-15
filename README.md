### Hexlet tests and linter status:
[![Actions Status](https://github.com/andomiele/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/andomiele/frontend-project-46/actions)

### Github Action status:
[![Action Status](https://github.com/andomiele/frontend-project-46/actions/workflows/nodejs.yml/badge.svg)](https://github.com/andomiele/frontend-project-46/actions)

### Maintainability Badge:
[![Maintainability](https://api.codeclimate.com/v1/badges/2be8e9df569e19dce7a7/maintainability)](https://codeclimate.com/github/andomiele/frontend-project-46/maintainability)

### Test coverage: 
[![Test Coverage](https://api.codeclimate.com/v1/badges/2be8e9df569e19dce7a7/test_coverage)](https://codeclimate.com/github/andomiele/frontend-project-46/test_coverage)

# Вычислитель отличий

### Описание

**Вычислитель отличий** - программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменений в конфигурационных файлах.

#### Возможности утилиты:

- [x] Поддержка разных входных форматов: yaml, json
- [x] Генерация отчета в виде plain text, stylish и json

### Требования: 

Требуется [node.js](https://nodejs.org/en) версия 13.2.0 и выше (проверить версию установленной node возможно командой в терминале node -v)

### Установка:  

1. Клонируйте репозиторий с помощью следующей команды:

```
git clone https://github.com/andomiele/frontend-project-46.git

```
2. Выполните команду: 

```
sudo npm link

```

Пример работы формата по умолчанию:

[![asciicast](https://asciinema.org/a/hWoRQdJo5ReQ7FWYAeMEZF4iF.svg)](https://asciinema.org/a/hWoRQdJo5ReQ7FWYAeMEZF4iF)

Пример работы формата Stylish: 

[![asciicast](https://asciinema.org/a/Io85wT1TvGk44hWkL7m1FERXU.svg)](https://asciinema.org/a/Io85wT1TvGk44hWkL7m1FERXU)

Пример работы формата Plain: 

[![asciicast](https://asciinema.org/a/LaTGttmjNhIej3wLOsLIwJ6J6.svg)](https://asciinema.org/a/LaTGttmjNhIej3wLOsLIwJ6J6)

Вывод в формате JSON:

[![asciicast](https://asciinema.org/a/mtMApxdyTbMUAixTyIzBYzBo2.svg)](https://asciinema.org/a/mtMApxdyTbMUAixTyIzBYzBo2)