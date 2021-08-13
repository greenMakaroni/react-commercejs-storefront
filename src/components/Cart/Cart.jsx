import React from 'react'
import CartItem from './CartItem/CartItem.jsx';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles.js';


const Cart = ({ cartItems, handleEmptyCart, handleRemoveFromCart, handleUpdateCartQty }) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">
            You have no items in your shopping cart, start adding some!
            <Button component={Link} to='/' className={classes.emptyButton} variant="contained" color="secondary" size="large" type="button">
                BACK TO BROWSE
            </Button>
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cartItems.line_items.map(item => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} handleRemoveFromCart={handleRemoveFromCart} handleUpdateCartQty={handleUpdateCartQty} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cartDetails}>

                <Typography variant="h4">
                    Subtotal: {cartItems.subtotal.formatted_with_symbol}
                </Typography>

                <div>
                    <Button onClick={() => handleEmptyCart()} className={classes.emptyButton} variant="contained" color="secondary" size="large" type="button">
                        Empty cart
                    </Button>

                    <Button component={Link} to='/checkout' className={classes.checkoutButton} variant="contained" color="primary" size="large" type="button">
                        Checkout
                    </Button>
                </div>

            </div>
        </>
    );

    if (!cartItems.line_items) return 'Loading...';

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>
                Your Shopping Cart
            </Typography>
            {!cartItems.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
