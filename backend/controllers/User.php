<?php

namespace Controller;

use Binemmanuel\ServeMyPhp\BaseController;
use Binemmanuel\ServeMyPhp\Request;
use Binemmanuel\ServeMyPhp\Response;
use Binemmanuel\ServeMyPhp\Rule;

use Model\User as UserModel;

class User extends BaseController
{
    public function login(Request $request, Response $response)
    {
        $user = new UserModel($this->db);

        $user->loadData($request->jsonBody());

        $user->makeRules([
            'username' => [Rule::REQUIRED],
            'password' => [Rule::REQUIRED],
        ]);

        if ($user->hasError()) {
            return $response::sendJson([
                'error' => true,
                'errors' => $user->errors(),
            ], statusCode: 400);
        }

        $user = $user->verify();

        if (empty($user)) {
            return $response::sendJson([
                'error' => true,
                'message' => 'Invalid username or password',
            ], statusCode: 401);
        }

        return $response::sendJson([
            'error' => false,
            'message' => 'Authenticated successfully',
        ]);
    }
}
