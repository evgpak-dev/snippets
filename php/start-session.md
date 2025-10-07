```php
function startSession(): void
{
    if (session_status() === PHP_SESSION_ACTIVE) {
        throw new RuntimeException('Session has already been started');
    }

    session_set_cookie_params(['secure' => true, 'httponly' => true, 'samesite' => 'lax']);

    if (!session_start()) {
        throw new RuntimeException('Unable to start the session');
    }
}
