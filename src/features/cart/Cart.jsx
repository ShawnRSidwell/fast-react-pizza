import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import { useSelector } from 'react-redux';
import { getCart } from './cartSlice';
import { getUsername } from '../user/userSlice';

function Cart() {
  const username = useSelector(getUsername);
  const cart = useSelector(getCart);

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.key} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secondary">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
