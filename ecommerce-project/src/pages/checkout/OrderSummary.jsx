import dayjs from 'dayjs';
import { formatMoney } from '../../utils/money'
import { DeliveryOptions } from './DeliveryOptions';

export function OrderSummary({ cart, deliveryOptions }) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((CartItem) => {
                const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
                    return deliveryOption.id === CartItem.deliveryOptionId;
                });
                return (
                    <div key={CartItem.productId}
                        className="cart-item-container">
                        <div className="delivery-date">
                            Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMS).format('dddd,MMM D')}
                        </div>

                        <div className="cart-item-details-grid">
                            <img className="product-image"
                                src={CartItem.product.image} />

                            <div className="cart-item-details">
                                <div className="product-name">
                                    {CartItem.productName}
                                </div>
                                <div className="product-price">
                                    {formatMoney(CartItem.product.priceCents)}
                                </div>
                                <div className="product-quantity">
                                    <span>
                                        Quantity: <span className="quantity-label">2</span>
                                    </span>
                                    <span className="update-quantity-link link-primary">
                                        Update
                                    </span>
                                    <span className="delete-quantity-link link-primary">
                                        Delete
                                    </span>
                                </div>
                            </div>
                            <DeliveryOptions CartItem={CartItem} deliveryOptions={deliveryOptions} />
                        </div>
                    </div>

                );

            })}

        </div>

    );
}