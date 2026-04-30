```php
declare(strict_types=1);

function slugify(string $text): string
{
    // 1. Транслитерация: преобразует кириллицу в латиницу. Если функция недоступна, пропускаем этот шаг.
    if (function_exists('transliterator_transliterate')) {
        $text = transliterator_transliterate('Any-Latin; Latin-ASCII', $text);
    }

    // 2. Безопасный перевод в нижний регистр для мультибайтовых строк (UTF-8)
    $text = mb_strtolower($text, 'UTF-8');

    // 3. Заменяет любые пробельные символы (пробелы, табы, переносы) и подчеркивания на одно тире
    $text = preg_replace('/[\s_]+/', '-', $text);

    // 4. Удаляет всё, кроме строчных латинских букв, цифр и тире
    $text = preg_replace('/[^a-z0-9\-]+/', '', $text);

    // 5. Удаляет повторяющиеся тире (например, "my---slug" станет "my-slug")
    $text = preg_replace('/[\-]+/', '-', $text);

    // 6. Убирает тире по краям ("-my-slug-" -> "my-slug")
    return trim($text, '-');
}
```

**Пример:**
```php
echo slugify('Привет, мир! Это тест.');
// privet-mir-eto-test

echo slugify('  Много ---  пробелов и___подчеркиваний! ');
// mnogo-probelov-i-podcerkivanij

echo slugify('Тест с разными символами: @#$%^&*()');
// test-s-raznymi-simvolami
```