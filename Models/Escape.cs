public static class Escape{
public static string[] incognitasSalas{get;private set;} = new string[] {"10","ANUBIS","HARPO EGIPCIO","WWWDSSDWWDSSDWAWASSAWWWDSDSS"} ;
static int estadoJuego{get;set;} = 1;

public static int GetEstadoJuego(){
    return estadoJuego;
}

public static bool ResolverSala(int Sala, string Incognita){
bool Paso = incognitasSalas[Sala] == Incognita;
if(Paso){estadoJuego++;}
return Paso;
}
}