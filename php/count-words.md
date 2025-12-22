```php
/**
 * Counts words in a string using a Unicode-safe regular expression.
 *
 * @param string $string The input string.
 * @return int The number of words found.
 */

function countWords(string $string): int {
    preg_match_all('/\p{L}+/u', $string, $matches);

    return count($matches[0]);
}
```
