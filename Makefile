include .env

deploy:
	echo "Deploying to production server"
	rsync -rP ./dist/ kolehiyo@${PRODUCTION_HOST_IP}:/home/kolehiyo/dist
