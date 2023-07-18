<?php
require __DIR__ . '/../config.php';

use Binemmanuel\ServeMyPhp\Database;
use Binemmanuel\ServeMyPhp\Router;
use Controller\User;

$database = (new Database($_ENV))->mysqli();

$router = new Router($database);


$router->post('/auth/login', [User::class, 'login']);

$router->run();