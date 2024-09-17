# Identity Verification Smart Contract

A Clarity smart contract for managing identity registration and verification.

## Features

- Register user identities
- Verify identities (contract owner only)
- Check verification status
- Retrieve identity names

## Functions

- `register-identity`: Register a new identity
- `verify-identity`: Verify an identity (owner only)
- `is-verified`: Check if an identity is verified
- `get-identity`: Get the name associated with an identity

## Usage

1. Register an identity:
   ```
   (register-identity "John Doe")
   ```

2. Verify an identity (owner only):
   ```
   (verify-identity <user-principal>)
   ```

3. Check verification status:
   ```
   (is-verified <user-principal>)
   ```

4. Get identity name:
   ```
   (get-identity <user-principal>)
   ```

## Error Codes

- `err-not-owner (u100)`: Caller is not the contract owner
- `err-already-registered (u101)`: Identity already registered
- `err-not-registered (u102)`: Identity not registered
