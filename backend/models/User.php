<?php

namespace Model;

use Binemmanuel\ServeMyPhp\BaseModel;

class User extends BaseModel
{
    public ?String $customerId;
    public ?String $username;
    public ?String $phoneNumber;
    public ?String $password;
    public ?String $email;
    public ?String $role;
    public ?String $status;
    public ?String $createdOn;

    static protected array $rules;

    protected function __setTable(): string
    {
        return 'gp_users';
    }

    protected function rules(): array
    {
        return self::$rules;
    }

    public function makeRules(array $rules): void
    {
        self::$rules = $rules;
    }
}
