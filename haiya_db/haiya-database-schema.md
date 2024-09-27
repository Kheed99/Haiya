# Haiya App Database Schema

## 1. USERS
- user_id: INT (Primary Key)
- username: VARCHAR(50)
- email: VARCHAR(100)
- password_hash: VARCHAR(255)
- phone_number: VARCHAR(20)
- created_at: DATETIME
- last_login: DATETIME

**Importance**: This table is crucial for user management. It stores essential information about app users (customers) who will be booking services. The user_id serves as a unique identifier for each user across the application.

## 2. SERVICE_PROVIDERS
- provider_id: INT (Primary Key)
- business_name: VARCHAR(100)
- contact_person: VARCHAR(100)
- email: VARCHAR(100)
- phone_number: VARCHAR(20)
- address: TEXT
- rating: FLOAT
- created_at: DATETIME

**Importance**: This table stores information about the service providers, which are core to your application. It allows you to manage and display details about each professional or business offering services through Haiya.

## 3. SERVICES
- service_id: INT (Primary Key)
- provider_id: INT (Foreign Key referencing SERVICE_PROVIDERS)
- service_name: VARCHAR(100)
- description: TEXT
- base_price: DECIMAL(10,2)
- category_id: INT (Foreign Key referencing CATEGORIES)

**Importance**: This table defines the specific services offered by each provider. It's essential for presenting service options to users and for managing the services associated with each provider.

## 4. CATEGORIES
- category_id: INT (Primary Key)
- category_name: VARCHAR(50)
- description: TEXT

**Importance**: Categories help organize services into logical groups (e.g., plumbing, tutoring, cleaning). This table enables easy filtering and browsing of services for users.

## 5. BOOKINGS
- booking_id: INT (Primary Key)
- user_id: INT (Foreign Key referencing USERS)
- provider_id: INT (Foreign Key referencing SERVICE_PROVIDERS)
- service_id: INT (Foreign Key referencing SERVICES)
- booking_time: DATETIME
- status: VARCHAR(20) (e.g., 'pending', 'confirmed', 'completed', 'cancelled')
- total_price: DECIMAL(10,2)
- location: TEXT

**Importance**: This table is central to your application's functionality. It records all service bookings, linking users with service providers for specific services. It tracks the status of each booking and associated details.

## 6. REVIEWS
- review_id: INT (Primary Key)
- booking_id: INT (Foreign Key referencing BOOKINGS)
- user_id: INT (Foreign Key referencing USERS)
- provider_id: INT (Foreign Key referencing SERVICE_PROVIDERS)
- rating: INT
- comment: TEXT
- created_at: DATETIME

**Importance**: The reviews table allows users to rate and comment on services they've received. This is crucial for building trust in your platform and helping users make informed decisions about service providers.

## 7. PAYMENTS
- payment_id: INT (Primary Key)
- booking_id: INT (Foreign Key referencing BOOKINGS)
- amount: DECIMAL(10,2)
- payment_method: VARCHAR(50)
- status: VARCHAR(20) (e.g., 'pending', 'completed', 'failed')
- payment_date: DATETIME

**Importance**: This table handles the financial transactions associated with bookings. It's essential for tracking payments, which is crucial for both your business model and for providing transaction history to users and service providers.
