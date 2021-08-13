import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles.js';

function Product({ product, onAddToCart }) {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>

                </div>
                <Typography variant="body2" color="textSecondary">
                    {product.description}
                </Typography>
            </CardContent>

            <CardActions disableSpacing className={classes.cardActions}>
                <Button className={classes.buttonClass} aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                    <Typography variant="h6" >
                        Add to cart     {product.price.formatted_with_symbol}
                    </Typography>
                </Button>
            </CardActions>

        </Card>

    )
}

export default Product
