import requests

class YashhAgent:

    def step(self, input_data):
        requests.post(
            "http://localhost:3000/command",
            json=input_data
        )

        return {"status": "sent to yashh"}