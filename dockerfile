# Use official Python runtime as a base image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy project files
COPY . /app

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose port (if applicable)
EXPOSE 5000

# Default command
CMD ["python", "main.py"]
