#!/bin/bash

# Set the NODE_OPTIONS environment variable
NODE_OPTIONS=--openssl-legacy-provider
yarn next dev

# Display a message to confirm that the variable is set
echo "NODE_OPTIONS is set to: $NODE_OPTIONS"