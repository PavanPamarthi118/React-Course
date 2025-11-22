import dayjs from 'dayjs';
import { formatMoney } from '../../utils/money'
import axios from 'axios';

export function DeliveryOptions({ CartItem, deliveryOptions, loadCart }) {
    return (
        <div className="delivery-options">
            <div className="delivery-options-title">Choose a delivery option:</div>

            {deliveryOptions.map((deliveryOption) => {
                let priceString = 'FREE Shipping';
                if (deliveryOption.priceCents > 0) {
                    priceString = `${formatMoney(deliveryOption.priceCents)} - Shipping`;
                }

                const updateDeliveryOption = async () => {
                    await axios.put(`/api/cart-items/${CartItem.productId}`, {
                        deliveryOptionId: deliveryOption.id
                    });

                    await loadCart();

                }

                return (
                    <div key={deliveryOption.id} className="delivery-option"
                        onClick={updateDeliveryOption}>
                        <input
                            type="radio"
                            checked={deliveryOption.id === CartItem.deliveryOptionId}
                            onChange={()=>{}}
                            className="delivery-option-input"
                            name={`delivery-option-${CartItem.productId}`}
                        />
                        <div>
                            <div className="delivery-option-date">
                                {dayjs(deliveryOption.estimatedDeliveryTimeMS).format('dddd, MMM D')}
                            </div>
                            <div className="delivery-option-price">{priceString}</div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
