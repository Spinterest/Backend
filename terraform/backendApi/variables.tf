variable "common_tags" {
  type        = map(string)
  description = "Common tags applied to all resources"
  default = {
    "name"       = "spinterest"
  }
}

variable "region" {
  type        = string
  description = "The region where the resources will be deployed."
  default     = "eu-west-1"
}

variable "vpc_cidr" {
  type        = string
  description = "The CIDR block for the VPC."
  default     = "10.0.0.0/16"
}

variable "vpc_azs" {
  type        = list(string)
  description = "The availability zones for the VPC."
  default     = ["eu-west-1a", "eu-west-1b", "eu-west-1c"]
}

variable "vpc_public_subnets" {
  type        = list(string)
  description = "The public subnets for the VPC."
  default     = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
}

variable "vpc_private_subnets" {
  type        = list(string)
  description = "The private subnets for the VPC."
  default     = ["10.0.11.0/24", "10.0.12.0/24", "10.0.13.0/24"]
}

variable "ec2_public_key" {
  type        = string
  description = "The public key to use for the EC2 instance."
  default     = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCYdmNEQT6NefyG1qsVfcLeg/s27M5yJnFLAR2yBsrBy9g60h1osC1OgtuoxZgr9mpyup7re7m4nDN9poGJAFxGhiZcV/Uk+zjNRf+uVAKqrLmtFFxhV1gN9gYgQVY0Gt/6LAjPgn1STontKecqubqP+fPXQL25wfs6jhxdTSwXOLSSvt4B3v7sL7hZixNq7ZkWxfRs9rEwMJyIJlRbsGS858nrJY8tV8R2xWoDSFx2qg9/ITIWC9dz9VbQdb1BV193y87gRer37+5ALNZuJ25qVt/HpWbGD635cp7enFhw1a8KTWXmuGCcKRszluqFWEwjVX66nDfi7nDkNel+sNQXa21M0YgD7CNliD5myukiuMVeol0uz+wyg9E1yCN4yL/FOQemUAWhOSNeR0XisyvnXosTVDCP6x+gGuA6fzVbgT2Zi8y9htdPzT39+f0PLL5v1S/f2ZxUYCEOsZpBHx4TDf81kJKP/nfaV2VwaNn2IsOjDLVes4snnlp9OF/W5ys= roten@BRZTECH"
}

variable "db_username" {
  type        = string
  description = "The username for the database."
  default     = "spidey"
}

variable "db_password" {
  type        = string
  description = "The password for the database."
  sensitive   = true
  default     = "SecurePassword123!"
}

variable "naming_prefix" {
  type        = string
  description = "The prefix to use for naming resources."
  default     = "spinback"
}

variable "connection_string" {
  type        = string
  description = "The connection string for the database."
  sensitive   = true
  default     = "mysql://username:password@hostname:3306/database"
}

variable "jwt_secret" {
  type        = string
  description = "The secret for jwt"
  sensitive   = true
  default     = "supersecretpassword"
}
