```php
date_default_timezone_set('Europe/Moscow');

$date = new DateTime();
$intlFormatter = new IntlDateFormatter('ru_RU', IntlDateFormatter::LONG, IntlDateFormatter::LONG);
$intlFormatter->setPattern('dd MMMM Y, HH:mm');

echo $intlFormatter->format($date);
// 16 октября 2025, 14:00
