FROM golang:1.19 as build


WORKDIR /app

COPY . .

RUN go mod download 

RUN CGO_ENABLED=0 go build -o /server 


FROM scratch 
COPY --from=build /server /server
EXPOSE 8080
CMD  ["./server"]