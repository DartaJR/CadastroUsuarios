<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class)->create([
            'name' => "D'Artagnan Meireles",
            'email' => "dartaprime@hotmail.com",
            'name' => "74792431115",
            'email' => "00123456789, 00987654321",
            'name' => "1998-01-21",
            'endereco' => "Rua Teste, Numero Teste, Complemento Teste, Bairro Teste, Cidade Teste, Estado Teste",
        ]);
    }
}
