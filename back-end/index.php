<?php

require 'vendor/autoload.php';

use App\Router;
use App\Controllers\User;
use App\Controllers\Event;
use App\Controllers\Category;
use App\Controllers\Auth;
use App\Controllers\Register;

new Router([
  'user/:id' => User::class,
  'user' => User::class,
  'event/:id'=> Event::class,
  'event' => Event::class,
  'category' => Category::class,
  'auth/:action' => Auth::class,
  'register' => Auth::class
]);
