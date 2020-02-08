package isa.project.controller;

import java.util.List;

import isa.project.dto.PretragaKlinikaDTO;
import isa.project.model.Klinika;
import isa.project.service.KlinikaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "klinike")
public class KlinikaController {

	@Autowired
	private KlinikaService klinikaService;
	
	@GetMapping(value = "/all")
	public ResponseEntity<List<Klinika>> getAllKlinika() {

		List<Klinika> klinike = klinikaService.findAll();
		return new ResponseEntity<>(klinike, HttpStatus.OK);

	}

	@RequestMapping(value = "/pretragaKlinika", method = RequestMethod.POST)
	public PretragaKlinikaDTO pretragaKlinika(
			@RequestBody PretragaKlinikaDTO parametar) {
		return klinikaService.pretragaKlinika(parametar);
	}
	
	@RequestMapping(value = "/ocijeniKliniku/{parametar}", method = RequestMethod.POST)
	public Klinika ocjenaKlinike(
			@RequestBody Klinika klinika, @PathVariable double parametar) {
		double rezultat=0;
		Klinika k = klinikaService.findKlinikaById(klinika.getId());
		rezultat=(k.getOcjena() + parametar)/2;
		double konacno = klinikaService.konacanRezultat(rezultat);
		k.setOcjena(konacno);
		klinikaService.saveKlinika(k);
		return klinika;
	}
	
	
}
