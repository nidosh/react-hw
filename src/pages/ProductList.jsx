import React, { useState, useEffect } from 'react'
import { Button, Icon, Menu, Table } from 'semantic-ui-react'
import ProductService from '../services/productService'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cartAction'

export default function ProductList() {
    const dispatch = useDispatch()

    const [products, setProducts] = useState([]);

    useEffect(() => {
        let productService = new ProductService()
        productService.getProducts().then(result => setProducts(result.data.products))
    }, [])

    const handleAddToCart=(product)=>{
        dispatch(addToCart(product))
    }


    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
                        <Table.HeaderCell>Ürün Acıklaması</Table.HeaderCell>
                        <Table.HeaderCell>Ürün Fiyatı</Table.HeaderCell>
                        <Table.HeaderCell>İndirim</Table.HeaderCell>
                        <Table.HeaderCell>Ürün Stogu</Table.HeaderCell>
                        <Table.HeaderCell>Ürün Markası</Table.HeaderCell>
                        <Table.HeaderCell>Ürün Kategorisi</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {products.map((product) => (
                        <Table.Row key={product.id}>
                            <Table.Cell><Link to={`/products/${product.title}`}>{product.title}</Link></Table.Cell>
                            <Table.Cell>{product.description}</Table.Cell>
                            <Table.Cell>{product.price}</Table.Cell>
                            <Table.Cell>{product.rating}</Table.Cell>
                            <Table.Cell>{product.stock}</Table.Cell>
                            <Table.Cell>{product.brand}</Table.Cell>
                            <Table.Cell>{product.category}</Table.Cell>
                            <Table.Cell>
                                <Button onClick={handleAddToCart(product)}>Sepete Ekle</Button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan="3">
                            <Menu floated="right" pagination>
                                <Menu.Item as="a" icon>
                                    <Icon name="chevron left" />
                                </Menu.Item>
                                <Menu.Item as="a">1</Menu.Item>
                                <Menu.Item as="a">2</Menu.Item>
                                <Menu.Item as="a">3</Menu.Item>
                                <Menu.Item as="a">4</Menu.Item>
                                <Menu.Item as="a" icon>
                                    <Icon name="chevron right" />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}