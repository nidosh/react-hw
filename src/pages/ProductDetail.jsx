import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    CardMeta,
    CardHeader,
    CardGroup,
    CardContent,
    Button,
    Card,
    Image,
} from "semantic-ui-react";
import ProductService from '../services/productService'

function ProductDetail() {
    let { title } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        let productService = new ProductService();
        productService.getProducts().then((result) => {
            // Assuming you have an array of products and you want to find the one with the matching title
            const foundProduct = result.data.products.find((p) => p.title === title);
            setProduct(foundProduct || {}); // Set found product or an empty object if not found
        });
    }, [title]);

    return (
        <div>
            <CardGroup>
                <Card fluid>
                    <CardContent>
                        <Image
                            floated="right"
                            size="large"
                            src={product.thumbnail}
                        />
                        <CardHeader>{product.title}</CardHeader>
                        <CardMeta>{product.description}</CardMeta>
                        <CardMeta className="text-3xl">{product.price}</CardMeta>
                        <CardMeta>{product.stock}</CardMeta>

                    </CardContent>
                    <CardContent extra>
                        <div className="ui two buttons">
                            <Button basic color="green">
                                Approve
                            </Button>
                            <Button basic color="red">
                                Decline
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </CardGroup>
        </div>
    );
}
export default ProductDetail;