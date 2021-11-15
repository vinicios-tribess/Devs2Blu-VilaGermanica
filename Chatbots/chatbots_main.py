import os


def processar_resposta(resposta, nome):
    if resposta == '1':
        print(
            f'{os.linesep}{nome} falta de ar, perda de apetite, dor persistente ou pressão no peito ou temperatura acima dos 38º.{os.linesep}'
        )
    elif resposta == '2':
        print(
            f'{os.linesep}{nome} idade avançada, obesidade, diabetes, hipertensão, imunidade baixa, condições cardíacas graves, doenças pulmonares ou renais.{os.linesep}'
        )
    elif resposta == '3':
        print(
            f'{os.linesep}{nome}, é normal que os vírus sofram mutação com o tempo. Os especialistas monitoram constantemente novas variantes do coronavírus que causam a covid-19 para ver se eles se propagam mais facilmente, causam doenças mais graves ou podem ter um impacto na eficácia das vacinas. Algumas novas cepas do vírus, incluindo a variante Delta, parecem ser mais contagiosas. A melhor maneira de limitar a transmissão da covid-19 é as pessoas serem vacinadas quando a vacina estiver disponível e continuarem a seguir os conselhos existentes sobre a prevenção da propagação do vírus, incluindo distanciamento físico, uso de máscaras, lavagem regular das mãos.{os.linesep}'
        )
    elif resposta == '4':
        print(
            f'{os.linesep}{nome} qualquer pessoa que esteja planejando uma viagem deve sempre seguir as orientações locais e nacionais sobre se é aconselhável viajar. Aqueles que viajam devem verificar o aviso de seu destino para quaisquer restrições à entrada, requisitos de quarentena na entrada ou outros avisos de viagem relevantes. Se estiver viajando de avião, também é recomendável consultar as diretrizes da companhia aérea do seu voo. Siga, durante a viagem, as mesmas medidas de proteção individual. Além de tomar precauções padrão de viagens, e para evitar ser colocado(a) em quarentena ou ter negada a reentrada em seu país de origem, é aconselhável verificar a atualização mais recente sobre a covid-19 no site da International Air Transport Association (disponível somente em inglês), que inclui uma lista de países e medidas de restrição. {os.linesep}'
        )
    else:
        print('Digite apenas 1, 2, 3 ou 4')


def start():
    # Apresentar o chatbot
    print(
        'Olá! Bem-vindo a Central de combate ao covid-19.Este assistente virtual servirá como uma ajuda a mais, caso você continue em dúvida a respeito de algumas informações vitais que não estão deixando você e sua família tranquilos.'
    )
    # pedir o nome
    nome = input('Digite seu nome: ')
    # pedir o e-mail
    email = input('Digite seu e-mail: ')
    while True:
        # Oferer o menu de opções
        resposta = input(
            f'O que gostaria de saber hoje?{os.linesep}[1] – Quais os sintomas mais graves?{os.linesep}[2] - Quais os fatores de risco para os casos graves de Covid-19?{os.linesep}[3] – Já tive Covid-19, porém ouvi dizer que existem variantes do vírus. O que isso significa? {os.linesep}[4] - Que precauções devo tomar com minha família se viajarmos neste final de ano?{os.linesep}'
        )
        # Processar a resposta enviada
        processar_resposta(resposta, nome)


if __name__ == '__main__':
    start()
