<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpsertProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|max:100',
            'description' => 'required|max:1500',
            'amount' => 'required|integer|min:0',
            'price' => 'required|numeric|min:0',
            'image' => 'nullable|image'
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Musisz coś wpisać w pole :attribute!'
        ];
    }

    public function attributes()
    {
        return [
            'name' => 'nazwa produktu'
        ];
    }
}
