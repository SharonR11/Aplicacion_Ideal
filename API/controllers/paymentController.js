const express = require('express');
const mercadopago = require('mercadopago');
const { v4: uuidv4 } = require('uuid');

const idempotencyKey = uuidv4();

const crearOrden = async (req, res) => {
    try {
        const client = new mercadopago.MercadoPagoConfig({
            accessToken: 'TEST-5851230151403511-050200-eeaaabb3fa2133ec58e3ce6db3140fe6-1793221075'
        });
        const payment = new mercadopago.Payment(client);

        const body = {
            additional_info: {
                items: [
                    {
                        id:'014',
                        title: 'Cuarto 1',
                        description: 'Dummy description',
                        quantity: 1,
                        currency_id: 'PEN',
                        unit_price: 5,
                    }
                ],
                // payer: {
                //     first_name: 'Test',
                //     last_name: 'Test',
                //     phone: {
                //         area_code: '11',
                //         number: '0111111111'
                //     },
                //     address: {
                //         street_number: null
                //     }
                // },
                shipments: {
                    receiver_address: {
                        zip_code: '15106',
                        state_name: 'PERU',
                        city_name: 'Buzios',
                        street_name: 'Av Las Lomas',
                        street_number: 3003
                    }
                }
            },
            description: 'Payment for product',
            payment_method_id: 'master',
            token: 'ff8080814c11e237014c1ff593b57b8d',
            installments: 1,
            issuer_id:1,
            transaction_amount: 5,
            payer: {
                entity_type: 'individual',
                type: 'customer',
                email: 'test_user_1133871379@testuser.com',
                identification: {
                  type: 'DNI',
                  number: '74859632'
                }
            },
        };

        const requestOptions = {idempotencyKey: idempotencyKey};

        const response = await payment.create({ body, requestOptions });
        console.log(response);

        // Envía la respuesta JSON con los detalles de la preferencia creada
        res.json(response);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong", error });
    }
}

module.exports = {
    crearOrden
};
