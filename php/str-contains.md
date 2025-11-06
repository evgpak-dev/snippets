```php
function contains(string $haystack, string $needle, bool $caseSensitive = true): bool
{
    if (empty($needle)) {
        return true;
    }

    if ($caseSensitive) {
        return str_contains($haystack, $needle);
    } else {
        return mb_stripos($haystack, $needle) !== false;
    }
}
