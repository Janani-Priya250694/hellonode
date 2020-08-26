<<<<<<< HEAD
FROM node:7-onbuild
LABEL maintainer "janani"
EXPOSE 8000
=======
# use a node base image
FROM node:7-onbuild

# set maintainer
LABEL maintainer "academy@release.works"

# set a health check
HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD curl -f http://127.0.0.1:8000 || exit 1

# tell docker what port to expose
EXPOSE 8000

>>>>>>> f51b0516afa750b4dea3fb27f7a6dd73e870179c
