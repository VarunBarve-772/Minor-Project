from ..models import ExcludeKeywords 

def extractingKeywords(string):
    trimed_string = string.split()
    result_list = []
    result_string = " "

    for word in trimed_string:
        try:
            search_result = ExcludeKeywords.objects.get(keyword__iexact = word)
        except:
            search_result = None
        
        if search_result == None:
            result_list.append(word)

    result_string = result_string.join(result_list)
    return result_string

