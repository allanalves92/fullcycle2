FROM golang:alpine as builder

RUN mkdir -p /go/src/app
WORKDIR /go/src/app
RUN go mod init
COPY . .

ENV CGO_ENABLED=0

RUN GOOS=linux go build ./main.go

FROM scratch
WORKDIR /go/src/app
COPY --from=builder /go/src/app .
CMD ["/go/src/app/main"]