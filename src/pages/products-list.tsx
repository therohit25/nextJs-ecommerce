'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from '@/components/product-card';
import { Category, Product } from '@/response-types/product';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {  getCategories } from '@/api/product';
import { createFilterURL } from '@/helpers/createURL';
import { useCustomRouter } from '@/hooks/useCustomRouter';

const ProductListView = ({products}:{products:Product[]}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [categories, setCategories] = useState([]);
  const router = useCustomRouter();
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  const search = async () => {
   const url = createFilterURL({ searchTerm, category, priceRange });
   router.push(url);
  };

  return (
    <>
      <Box display='flex' gap={2} p={2} alignItems='center' justifyContent={'center'} flexWrap={'wrap'}>
        <TextField
          label='Search'
          variant='outlined'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FormControl sx={{ minWidth: 170}}>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value='' selected>All</MenuItem>
            {categories?.map((cat:Category) => (
              <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 170}}>
          <InputLabel>Price Range</InputLabel>
          <Select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <MenuItem value='' selected>All</MenuItem>
            <MenuItem value='low'>Under $100</MenuItem>
            <MenuItem value='mid'>$100 - $500</MenuItem>
            <MenuItem value='high'>Above $500</MenuItem>
          </Select>
        </FormControl>
        <Button variant='contained' onClick={search}  sx={{padding:'0.6rem 1.5rem'}}>Search&nbsp;🔍</Button>
      </Box>
      <Grid container spacing={3} sx={{ px: { xs: 2, sm: 3, md: 4 }, py: { xs: 2 } }}>
        {products?.length > 0 ? products?.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <ProductCard imageURL={product?.images?.[0] ?? product?.images?.[1] ?? product?.images?.[2]} title={product.title} description={product.description} id={product.id} />
          </Grid>
        )) : <h2>No Products Found</h2>}
      </Grid>
    </>
  );
};

export default ProductListView;
