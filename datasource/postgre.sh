#!/usr/bin/env bash
if [ "$1" = "init" ]; then
    docker run --name edges-postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 8080:5432 postgres:11.1-alpine
elif [ "$1" = "sql" ]; then
    (docker exec -i edges-postgres psql -U postgres) < $2
elif [ "$1" = "psql" ]; then
    docker exec -ti edges-postgres psql -U postgres
elif [ "$1" = "schema" ]; then
    schemafiles=`ls *-schema.sql`
    for eachfile in $schemafiles; do
        echo ''
        echo $eachfile
        echo '-----------------------------'
        (docker exec -i edges-postgres psql -U postgres) < $eachfile
        echo ''
    done
elif [ "$1" = "seed" ]; then
    schemafiles=`ls *-data.sql`
    for eachfile in $schemafiles; do
        echo ''
        echo $eachfile
        echo '-----------------------------'
        (docker exec -i edges-postgres psql -U postgres) < $eachfile
        echo ''
    done
else
    docker start edges-postgres
fi
