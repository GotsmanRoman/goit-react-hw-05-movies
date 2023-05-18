import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { Form, Input, Button } from './Search.module.jsx';

export default function Search({ onSubmit }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  const [query, setQuery] = useState('');

  const handleChange = event => {
    const pageQuery = event.target.value;
    setQuery(pageQuery);
    if (pageQuery === '') {
      return setSearchParams({});
    } else {
      setSearchParams({ query: pageQuery });
    }
  };
  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(searchQuery);
    resetForm();
  };
  const resetForm = () => {
    setQuery('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" value={searchQuery} onChange={handleChange}></Input>
      <Button>Search</Button>
    </Form>
  );
}

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
