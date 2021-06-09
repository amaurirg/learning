from zeep import Client

# class SessionCreate:
#     def __init__(self, username, password, organization, domain):
wsdl = "http://hom-gws.voegol.com.br/GWS/SessionCreateRQService.svc?wsdl"
client = Client(wsdl)

security = {
    "UsernameToken": {
        "Username": "0470",
        "Password": "B2BGWS21",
        "Organization": "AAP",
        "Domain": "G3"}
}

header = {
    "From": {"PartyId": {}},
    "To": {"PartyId": {}},
    "CPAId": "G3",
    "ConversationId": "ECOMPONENT",
    "Service": "SessionCreateRQ",
    "Action": "SessionCreateRQ",
    "MessageData": {
        "MessageId": "teste@e-component.com",
        "Timestamp": "2020-01-01T00:00:00Z"
    }
}

response = client.service.SessionCreateRQ(
    POS={
        "Source": {
            "PseudoCityCode": "HDQ"
        }
    },
    _soapheaders={
        "Security": security,
        "MessageHeader": header
    }
)

if response.body.status == "Approved":
    print(f"\nSessão criada com sucesso\nBinarySecurityToken: {response.header.Security.BinarySecurityToken}")
