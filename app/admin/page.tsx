"use client"
import { Box, Text } from '@mantine/core';
import { NextPage } from 'next';
import React from 'react';
const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
};

const AdminPage: NextPage = () => {
  return (
    <Box>
      <Text color="teal" align="center">
        Welcome to Admin side
      </Text>
    </Box>
  );
};

export default AdminPage;