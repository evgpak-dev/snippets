```php
/**
 * Converts an image to Data URL string
 * 
 * @param string $filePath The path to the image file
 * @return string|false The Data URL string or false on failure
*/
function imageToDataURL(string $filePath): string|false
{
    if (!is_readable($filePath)) {
        return false;
    }

    $fileContent = file_get_contents($filePath);

    if ($fileContent === false) {
        return false;
    }

    $finfo = new finfo(FILEINFO_MIME_TYPE);
    $mimeType = $finfo->file($filePath);

    $base64Content = base64_encode($fileContent);

    return "data:{$mimeType};base64,{$base64Content}";
}
