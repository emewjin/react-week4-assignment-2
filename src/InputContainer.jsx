import { useDispatch, useSelector } from 'react-redux';

import { addRestaurants, updateRestaurantInfo } from './actions';

import RestaurantForm from './RestaurantForm';

export default function InputContainer() {
  const dispatch = useDispatch();

  const { restaurantInfo } = useSelector((state) => ({
    restaurantInfo: state.restaurantInfo,
  }));

  const handleInputChange = (name, value) => {
    dispatch(updateRestaurantInfo({ name, value }));
  };

  const handleFormSubmit = () => {
    dispatch(addRestaurants());
  };

  return (
    <RestaurantForm
      restaurantInfo={restaurantInfo}
      onSubmitForm={handleFormSubmit}
      onChangeInput={handleInputChange}
    />
  );
}
