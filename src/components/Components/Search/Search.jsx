import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { Form, Input } from './Search.module.jsx';
import { DebounceInput } from 'react-debounce-input';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  const [, setQuery] = useState('');

  const handleChange = event => {
    const pageQuery = event.target.value;
    setQuery(pageQuery);
    if (pageQuery === '') {
      return setSearchParams({});
    } else {
      setSearchParams({ query: pageQuery });
    }
  };
  // const handleSubmit = event => {
  //   event.preventDefault();

  //   onSubmit(searchQuery);
  //   resetForm();
  // };
  // const resetForm = () => {
  //   setQuery('');
  // };

  return (
    <Form>
      <DebounceInput
        placeholder={'input search keywords'}
        element={Input}
        minLength={3}
        debounceTimeout={500}
        onChange={handleChange}
        value={searchQuery}
      />
    </Form>
  );
}

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
