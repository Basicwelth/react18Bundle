# SCSS
## Установка `Dart Sass`
### Mac OS X, Linux (Homebrew)
```shell
brew install sass/sass/sass
```
### Windows (Chocolatey)
```shell
choco install sass
```
### [Ручная установка](https://github.com/sass/dart-sass/)
#### Dart Library
Вы также можете использовать `Dart Sass` в качестве библиотеки `Dart`, чтобы получить скорость `VM Dart`, а также возможность определять свои собственные функции. Чтобы добавить его в существующий проект:
1. Установите пакет [SDK Dart](https://dart.dev/get-dart#automated-installation-and-updates). Убедитесь, что его каталог находится на вашем [PATH](https://katiek2.github.io/path-doc/).
2. Создать файл `pubspec.yaml`: 
```yaml
name: my_project
dev_dependencies: {
  sass: ^1.53.0
}
```
3. Создать файл `compile-sass.dart`:
```dart
import 'dart:io';
  import 'package:sass/sass.dart' as sass;

  void main(List<String> arguments) {
  var result = sass.compile(arguments[0]);
  new File(arguments[1]).writeAsStringSync(result);
}
```
## light.scss and dark.scss to light.css and dark.css.
```shell
sass light.scss:light.css dark.scss:dark.css
```
## Вывод стилей (сокращение -s). Dart Sass поддерживает два вывода.
* `expanded` (по умолчанию) выводит каждый селектор в отдельную форматированную строку.
* `compressed` удаляет не важные и не критичные отсутпы в, и выводит все стили в одну строку.
```shell
sass --style=expanded style.scss
```
```css
h1 {
    font-size: 40px;
}
```
```shell
sass --style=compressed style.scss
```
```css
h1 {
    font-size: 40px
}
```