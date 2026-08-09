#!/bin/bash
set -euo pipefail

apt-get update
apt-get install -y git gnupg2

rm -rf /var/lib/apt/lists/*
