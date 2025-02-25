#!/bin/bash

# Set the NODE_OPTIONS environment variable
NODE_OPTIONS=--openssl-legacy-provider
yarn next lint

# Display a message to confirm that the variable is set
echo -e "\nNODE_OPTIONS was set to: $NODE_OPTIONS"