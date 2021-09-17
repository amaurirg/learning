from python_dir.ferrari import Ferrari


class Carro(Ferrari):
    def __init__(self, nome):
        self._nome = nome

    @property
    def nome(self):
        return self._nome
